const getStoredJobApplication=()=>{
    const storedJobApplicaiton=localStorage.getItem('job-application');
    if(storedJobApplicaiton){
        return JSON.parse(storedJobApplicaiton);
    }
   return [];
}
const saveApplicationJobId=(id)=>{
console.log("incomming id for save ", id)
  const storedJobApplicaitons=getStoredJobApplication();
  console.log("stored item ",storedJobApplicaitons);
  const exists=storedJobApplicaitons.find(jobId=>(jobId)===id);
  if(!exists){
    console.log("not exits");
    storedJobApplicaitons.push(id);
    console.log("after pushing ",storedJobApplicaitons)
    localStorage.setItem('job-application',JSON.stringify(storedJobApplicaitons));
  }
}
export {getStoredJobApplication,saveApplicationJobId}