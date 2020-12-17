
//Node 6.X style
/* exports.handler = (event, context, callback) => {
    ...

    callback(null, result)
}
 */

 // Using async from node 8.X and above
exports.handler = async(event, context) => {
    const data = event.data;
    let newImage = await resizeImage();
    
    return newImage;

}

const resizeImage = (data) => new Promise((resolve, reject) => {
    //some processing

    if(error) {
        reject(error);
    } else {
        resolve(result);
    }
});

