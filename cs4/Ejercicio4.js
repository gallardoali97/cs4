let student1Courses = ["Sports","History","Math", "English", "Programming"];
let student2Courses = ["Geography","History", "Spanish", "Programming","Sports"];

function coincidencias(a,b) {
    for (let i = 0; i < a.length; i++) {
       
        for (let j = 0; j < b.length; j++) {
        if(b[j]== a[i]){
           console.log("Clase repetida: "+b[j]);
            break;
            }
         if(a[i]== b[j]){
           console.log("Clase repetida: "+a[i]);
             break;
            }
        }
        
    }
    
}

coincidencias(student1Courses,student2Courses);