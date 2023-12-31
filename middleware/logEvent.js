const logger  = (req,res, next) => {
    console.log(`\t ${req.method} ${req.url}`)
    next()
}

export default logger