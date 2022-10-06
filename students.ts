class Student {
    firstname:string
    lastname :string
    id:number
    enrolledcourses:number
    email_add:string
    home_add:string

    constructor(first_name: string, last_name:string, id_:number,enrolled_courses: number, email_addp:string, home_addp:string ){
        this.firstname = first_name;
        this. lastname = last_name;
        this.id = id_;
        this.enrolledcourses = enrolled_courses;
        this.email_add = email_addp;
        this.home_add = home_addp;   
    }
        //FIRST NAME
    public getFirstName():string{
       return this.firstname;
    }
    public setFirstName(first_name: string){
        this.firstname = first_name;
    }
    //Last NAME
    public getLastName():string{
        return this.lastname;
     }
     public setLastName(last_name: string):void{
         this.lastname = last_name;
     }
        //ID
    public getID():number{
        return this.id;
     }
     public setID(id_: number){
         this.id = id_;
     }
        //ENROLLED COURSES
     public getEnrolledCourses():number{
        return this.enrolledcourses;
     }
     public setEnrolledCourses(enrolled_coursesp: number){
         this.enrolledcourses = enrolled_coursesp;
     }
        //EMAIL ADDRESS
        public getEmailAddress():string{
            return this.email_add
        }
    public setEmailAddress(email_add:string){
        this.email_add = email_add;
    }
        //HOME ADDRESS
    public getHomeAddress():string{
        return this.home_add;
    }
    public setHomeAddress(home_add:string){
        this.home_add = home_add
    }

}
export {Student}