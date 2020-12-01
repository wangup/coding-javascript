function leftString(str,n) {
    if (str&&n!=null) {
        let s1 = str.substring(n, str.length)
        let s2 = str.substring(0, n)
        return s1 + s2
    }else {
        return ''
    }
}
console.log(leftString("abcdefg",2))