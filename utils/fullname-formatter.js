const formatFullName = (fullname) => {
  if (!fullname) 
    return fullname;

  if(fullname.match(/^((\b[A-zÀ-ú']{2,40}\b)\s*){2,}$/gm) === null)
  	return fullname.toString()
                   .replace(/[\d]/g, "")
                   .replace(/\s{2,}/gm ," ")
                   .trimEnd();
  
  fullname = fullname.replace(/[\d]/g, "")
                     .match(/^((\b[A-zÀ-ú']{2,40}\b)\s*){2,}$/gm)
  									 .toString();

  return fullname;
}

export default formatFullName;
