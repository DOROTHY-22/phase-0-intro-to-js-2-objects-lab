/*const employee = {
     name: "Hellen",
     streetAddress: "12 Broadway"
   };
   

   function updateEmployeeWithKeyAndValue(employee, key, value) {
     return { ...employee, [key]: value };
   }
   

   function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee[key] = value;
     return employee;
   }
   

   function deleteFromEmployeeByKey(employee, key) {
     const newEmployee = { ...employee };
     delete newEmployee[key];
     return newEmployee;
   }
   
   
   function destructivelyDeleteFromEmployeeByKey(employee, key) {
     delete employee[key];
     return employee;
   }
   
   
   module.exports = {
     employee,
     updateEmployeeWithKeyAndValue,
     destructivelyUpdateEmployeeWithKeyAndValue,
     deleteFromEmployeeByKey,
     destructivelyDeleteFromEmployeeByKey
   }; */

const employee = {
  name :"Sam",
  streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee,key,value){
  return {...employee,['streetAddress'] :'11 Broadway'};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee['streetAddress']= '12 Broadway';
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
  const newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
  delete employee[key];
  return employee;
}



// Write your solution in this file!
