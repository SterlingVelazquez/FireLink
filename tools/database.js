import {firebase} from '../tools/config.js'
import 'firebase/storage'

class Database {

    async getAllFiles(page) {
        var files = [];
        await firebase.database().ref(page).orderByChild("timestamp").once('value').then(async function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                files.push({
                    name:childSnapshot.val()["name"],
                    username:childSnapshot.val()["username"],
                    size:childSnapshot.val()["size"],
                    ref:childSnapshot.val()["ref"],
                    date:childSnapshot.val()["date"],
                    email:childSnapshot.val()["email"],
                    lastModified:childSnapshot.val()["lastModified"],
                })
            })
        })
        return files;
    }

    async add(page, files, email, uid, username) {
        var date = await this.setDate();
        for (var i=0; i < files.length; i++) {
            await firebase.storage().ref(page).child(files[i].name + email).put(files[i]).then(async res => {
                await firebase.database().ref(page + '/' + files[i].lastModified + uid).set({
                    name:files[i].name,
                    username:username,
                    size:files[i].size,
                    timestamp: (+ new Date) * -1,
                    date:date,
                    ref:files[i].name + email,
                    email:email,
                    lastModified:files[i].lastModified,
                }, async function(error) {
                    if (error) {
                        // Upload failed
                    } else {
                        // Upload success
                    }
                })
            }).catch(function (error) {
                console.log("PDF Files Only")
            })
        }
    }

    async erase(page, file, uid) {
        await firebase.storage().ref(page + '/' + file.ref).delete();
        await firebase.database().ref(page + '/' + file.lastModified + uid).remove();
        await this.getAllFiles(page)
    }

    async setDate() {
        var today = new Date();
        var date = today.getMonth()+'/'+(today.getDate()+1)+'/'+today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        return dateTime;
    }
}

let database = new Database;
export {database};