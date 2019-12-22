export default async (param) => {
  try {
    return param;
  } catch (e) {
    console.log('-------------e'); console.log(e);
    return 'error';
  }
}

