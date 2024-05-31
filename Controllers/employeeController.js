const employees= [
    {id:1,Emp_name:"Raven",designation:"QA"},
    {id:2,Emp_name:"John",designation:"FSD"},
    {id:3,Emp_name:"Atkinson",designation:"DevOps Engineer"},
    {id:4,Emp_name:"Santhosh",designation:"UI/UX Designer"},
    {id:5,Emp_name:"Kaushik",designation:"Solution Architect"}
]

export const employeeDetails = (req,res)=>{
       res.status(200).json({data:employees});
}

export const employeeDetailsById = (req,res)=>{
    const empId = req.params.id;
    const employeeDetail = employees.find((e)=>e.id===parseInt(empId))
    if(!employeeDetail){
        res.status(404).send("employee not found")
    }
    res.status(200).json({message:"employee details",data:employeeDetail});
}

export const createEmployee = (req,res) =>{
     const {Emp_name,designation} = req.body;

     const newEmployee = {
        id:employees.length+1,
        Emp_name:Emp_name,
        designation:designation
     }
     
     employees.push(newEmployee);

     res.status(200).json({message:'new employee created',data:newEmployee})
}


export const editEmployee = (req,res) =>{
    const empId = req.params.id;
  
    const {Emp_name,designation} = req.body
    const index = employees.findIndex((e)=>e.id==empId); 
    if(index === -1){
        return res.status(404).send("Employee not found")
    }
    employees[index].Emp_name=Emp_name;
    employees[index].designation=designation;
    
    res.status(200).json({message:"edited",data:employees[index]})
}

export const deleteEmployee = (req,res)  =>{
    const empId = req.params.id;
    const index = employees.findIndex((e)=>e.id==empId); 
    
    if(index === -1){
        return res.status(404).send("Employee not found")
    }
    
    const deleted = employees.splice(index,1);
    res.status(200).json({message:"employee deleted",data:deleted})
}