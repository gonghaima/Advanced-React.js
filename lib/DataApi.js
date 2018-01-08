class DataApi{
  constructor(rawData){
    this.rawData = rawData;
  }
  mapIntoObject(arr=[]){
    console.log(`arr: ${arr}`);
    return [...arr].reduce((acc, curr)=>{
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getArticles(){
    return this.mapIntoObject(this.rawData.articles);
  }
  getAuthors(){
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;