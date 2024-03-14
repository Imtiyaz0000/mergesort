function merge(arr1: number[], arr2: number[]) {
    let newArr: number[] = [];
    let i1: number = 0;
    let i2: number = 0;
    let len1 = arr1.length;
    let len2 = arr2.length;
    while ((i1 < len1) && (i2 < len2)) {
    	if (arr1[i1] < arr2[i2]) {
      	newArr.push(arr1[i1]);
        i1++;
      }
      else if (arr1[i1] > arr2[i2]) {
      	newArr.push(arr2[i2]);
        i2++;
      }
      else {
      	newArr.push(arr1[i1]);
        newArr.push(arr2[i2]);
        i1++;
        i2++;
      }
    }
    if (i1 < len1) {
    	for (let i = i1; i < len1; i++) {
      	newArr.push(arr1[i]);
      }
    }
    else if (i2 < len2) {
    	for (let i = i2; i < len2; i++) {
      	newArr.push(arr2[i]);
      }
    }
    return newArr;
}

function sort(arr: number[]) {
    let listArr: number[][] = [];
    for (let i of arr) {
        let temp: number[] = [];
        temp.push(i);
        listArr.push(temp);
    }
    while (listArr.length != 1) {
      let tempArr: number[][] = [];
        for (let i = 0; i < listArr.length - 1; i+=2) {
        let temp: number[] = merge(listArr[i], listArr[i + 1]);
        tempArr.push(temp);
      }
      if (listArr.length % 2 === 1) {
        tempArr.push(listArr[listArr.length - 1])
      }
      listArr = tempArr;
    }
    return listArr;
}

self.onmessage = (event: MessageEvent) => {
  try {
    let result: number[][] = sort(JSON.parse(event.data));
    self.postMessage(result);
  }
  catch (error) {
    self.postMessage(error);
  }
}
