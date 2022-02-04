// Expected result : [
// { user_id: "1", name: "Bagas", department: "Frontend", school_id: "1", school: "PLMK" }
// { user_id: "2", name: "Faisal", department: "Frontend", school_id: "2", school: "PLMI" }
// { user_id: "3", name: "Surya", department: "Backend", school_id: "3", school: "PLN" }
// { user_id: "4", name: "Ari", department: "Backend", school_id: "4", school: "PTN" }
// ]

// Direction : Get array data from string below ("users" object) and make it object like "expected result"!! The conditions are :
// 1. Split data based on key (the key in brackets)
// 2. Each object of array in the "user" variable is separated by a comma ","
// 3. Make sure the data is sequential according to the user id

const users =
  "1(user_id) Bagas(name) Frontend(department) PLMK(school) 1(school_id), 2(user_id) Faisal(name) Frontend(department) PLMI(school) 2(school_id), 3(user_id) Surya(name) Backend(department) PLN(school) 3(school_id), 4(user_id) Ari(name) Backend(department) PTN(school) 4(school_id)";

function resultDev(data) {
    let hasil=[]; 
   let bersih = data.replace(/\s/g, "")
  let baris = bersih.split(",")
  baris.map(e=>{
    let obj={};
      let kolom = e.split(/([()])/)
      obj[kolom[2]]=kolom[0]
      obj[kolom[6]]=kolom[4]
      obj[kolom[10]]=kolom[8]
      obj[kolom[14]]=kolom[12]
      obj[kolom[18]]=kolom[16]

      hasil.push(obj)
  })
  return hasil;
}

console.log(resultDev(users));