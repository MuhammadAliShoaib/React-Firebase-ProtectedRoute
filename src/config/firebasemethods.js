import app from './firebaseconfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase,set,ref, onValue } from "firebase/database";

const auth = getAuth(app);
const db = getDatabase(app);

let signUpUser= (obj)=>{
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth,obj.email,obj.password)
        .then((res)=>{
            obj.id=res.user.uid
            let reference= ref(db,`users/${obj.id}`)
            set(reference,obj)
            .then(()=>{
                resolve("data sent successfully in database")
            })
            .catch((err)=>{
                reject(err.message)
            })
        }).catch((err)=>{
            reject(err.message)
        })
    })
}

let logInUser=(obj)=>{
    return new Promise((resolve,reject)=>{
        signInWithEmailAndPassword(auth,obj.email,obj.password)
        .then((res)=>{
            let uid = res.user.uid
            let reference = ref(db,`users/${uid}`)
            onValue(reference,(dt)=>{
                if(dt.exists()){
                    resolve(dt.val())
                }else{
                    reject("No data found")
                }
            })
        })
        .catch((err)=>{
            reject(err.message)
        })
    })
}


let checkAuth=()=>{
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const uid = user.uid;
                resolve(uid)
            }else{
                reject("User not logged in")
            }
        })
    })
}

let userLogOut=()=>{
    return signOut(auth)
}



export {signUpUser,logInUser,checkAuth,userLogOut};