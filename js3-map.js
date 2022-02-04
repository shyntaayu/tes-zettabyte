// Expected Result : 
// [
//   { name: 'Rian Nugraha', school_name: 'PLMK-JKT' },
//   { name: 'Ari Santoso', school_name: 'GRSR-JKT' },
//   { name: 'Rahman Sunggara', school_name: 'GELM-JKT' },
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.


const source = [
    {
      id: "1",
      data: {
          first_name: "Rian",
          last_name: "Nugraha"
      },
      school: {
        id: "1",
        data: "PLMK-JKT"
      },
    },
    {
      id: "2",
      full_name: "Ari Santoso",
      school: {
        id: "1",
        short_name: "GRSR",
        data: "JKT"
      },
    },
    {
      id: "3",
      data: {
        first_name: "Rahman",
        last_name: "Sunggara"
    },
    school: {
        id: "1",
        short_name: "GELM",
        data: "JKT"
      },
    },
    {
        id: "4",
        data: {
            first_name: "Rian",
            last_name: "Nugraha"
        },
        school: {
            id: "2",
            data: "PLMK-BDG"
        },
    },
  ]


  function result(num) {
    let a = num.map(e=>{

        const hasil={
            name: '', school_name:''
        }
        if(e.hasOwnProperty('full_name')) hasil.name=e.full_name
        
        if(e.hasOwnProperty('data') && e.data.hasOwnProperty('first_name') && e.data.hasOwnProperty('last_name')) hasil.name = e.data.first_name + ' '+ e.data.last_name 
        
        if(e.hasOwnProperty('school')){
            if(e.school.hasOwnProperty('short_name')) hasil.school_name = e.school.short_name+'-'+e.school.data
            else hasil.school_name=e.school.data
        }
        return hasil;
    })
    a = a.reduce((newHasil,self)=>{
        if(!newHasil.some(obj=>obj.name==self.name)){
            newHasil.push(self)
        }
        return newHasil
    },[])
    return a;
  }
  
  console.log(result(source));
