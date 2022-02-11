const folders = [
    {
        id: 5,
        name: 'Klasör 1',
        files: [
            { id: 17, name: 'profil.jpg' },
            { id: 18, name: 'manzara.jpg' },
        ],
    },
    {
        id: 6,
        name: 'Klasör 2',
        files: [
            { id: 21, name: 'foto.png' },
            { id: 22, name: 'dosya.xls' },
        ],
    },
    {
        id: 7,
        name: 'Klasör 3',
    },
]


const checkFile = () => {
    for (let i = 0; i < folders.length; i++) {
        if (typeof (folders[i].files) === "undefined") {
            folders[2].files = []
        }
    }
}
checkFile()

//   move(17,6) // dosyayı klasöre taşıyacak
//   copy(18,7) // kopyasını oluşturacak
//   remove(17) // dosyayı silecek
//   removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
//   parentFolderOf(17) // ==> 5


const parentFolderOf = (fileId) => {
    const len = folders.length
    for (let i = 0; i < len; i++) {

        const myfiles = folders[i].files
        for (let j = 0; j < myfiles.length; j++) {
            if (myfiles[j].id === Number(fileId)) {
                return folders[i].id
            }
        }
    }
    return null
}
// console.log(parentFolderOf(1))

// const copy = (fileId,folderId) =>{
//     const file_parent_id = parentFolderOf(fileId)
//     let copy_file_info;

//     for(let i=0; i<folders.length; i++){
//         if(folders[i].id === file_parent_id){
//             const folder_file = folders[i].files

//             for(let j=0; j<folder_file.length; j++){
//                 if(folder_file[j].id === fileId){
//                     copy_file_info = folder_file[j]
//                 }
//             }
//         }
//     }

//     for(let i=0; i<folders.length; i++){
//         if(folders[i].id === folderId){
//             folders[i].files=copy_file_info
//         }
//     }

// }
// copy(18,7)
// console.log(folders)

const copy = (fileId, folderId) => {
    const file_parent_id = parentFolderOf(fileId)
    let copy_file_info;

     folders.map((folder) =>{
        if(file_parent_id === folder.id){
            folder.files.map((file)=>{
                if(fileId === file.id){
                    copy_file_info = file
                }
            })
        }
    }) 
    

    folders.map((folder)=>{
        if(folderId === folder.id){
            folder.files.push(copy_file_info) 
        }
    })

}
