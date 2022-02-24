export default {
    formateDate(time){
        return `${time.getFullYear()}-${time.getMonth()+1>9?time.getMonth()+1:"0"+(time.getMonth()+1)}-${time.getDate()>9?time.getDate():"0"+(time.getDate())} ${time.getHours()}:${time.getMinutes()>9?time.getMinutes():"0"+(time.getMinutes())}:${time.getSeconds()>9?time.getSeconds():"0"+(time.getSeconds())}`
    }
}