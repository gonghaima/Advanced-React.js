class StateApi{
  constructor(rawData){
    this.rawData = rawData;
  }
  mapIntoObject(arr){
    return arr.reduce((acc, curr)=>{
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
  getState(){
    return {
      articles: this.getArticles(),
      authors: this.getAuthors(),
    };
  }
}

export default StateApi;