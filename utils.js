const fs=require('fs');

//create folder
const createFolder=(folderName)=>{
    // check if folder exists
    if(fs.existsSync(folderName)){
        //create folder
        fs.mkdirSync(folderName);
    }
};
const defaultPosts='[{"id":"2020", "title":"HTML", "url":"https://someurl.com","description":"The best"},]';
//create file
const createFile=(file)=>{
  //check if file exist
  if(!fs.existsSync(file)){
         fs.writeFileSync(file,defaultPosts);
  }
};

   
   
  


module.exports={
    createFolder,
    createFile
};