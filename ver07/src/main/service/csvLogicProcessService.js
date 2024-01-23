const fs = require('fs');

// 1) csv 가공하는 단 - json 형식 반환
export const processCsvDataViewObject = (csvData) => {
  let key = csvData[0].split(',');

  let typeMember = {}
  for (let i = 0; i < key.length; i++) {
    typeMember = {
      ...typeMember,
      [key[i]]: ''
    }
  }
  console.log(typeMember)
  return typeMember
}

// 2) csv 가공하는 단 - 리스트 출력 - json 형식 반환
export const processCsvDataViewList = (csvData) => {
  let key = csvData[0].split(',');

  let typeMember = {}
  for (let i = 0; i < key.length; i++) {
    typeMember = {
      ...typeMember,
      [key[i]]: ''
    }
  }
  console.log(typeMember)

  let gagongRecord = new Array();

  for (let gagongDataIndex = 1; gagongDataIndex < csvData.length; gagongDataIndex++) {
    let gagong = memberData[gagongDataIndex].split(',');
    for (let i = 0; i < key.length; i++) {
      typeMember = {
        ...typeMember,
        [key[i]]: gagong[i]
      }
    }
    
    gagongMember.push(typeMember)
  }
  console.log(gagongMember)

  console.log("로직 성공")

  return data
}