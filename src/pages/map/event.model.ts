export class EventModel {

    constructor(
        public id,
        public name:string,
        public description:string,
        public category_id:number,
        public place:string,
        public latitude:string,
        public logitude:string,
        public start_date:string,
        public end_date:string,
        public start_time:string,
        public end_time:string
     ) {

    }
}