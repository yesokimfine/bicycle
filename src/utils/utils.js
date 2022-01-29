export default {
    formateDate(time){
        return `${time.getFullYear()}-${time.getMonth()+1>10?time.getMonth()+1:"0"+(time.getMonth()+1)}-${time.getDate()>10?time.getDate():"0"+(time.getDate())} ${time.getHours()}:${time.getMinutes()>10?time.getMinutes():"0"+(time.getMinutes())}:${time.getSeconds()>10?time.getSeconds():"0"+(time.getSeconds())}`
    }
}