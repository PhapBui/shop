const baseUrl = "https://nutthat.com/wp-json/wp/v2/posts";

export const AddPost = (postData) => {
  return new Promise((resolve, reject) => {
    const token = sessionStorage.getItem("userData");
    console.log("====================================");
    console.log(sessionStorage);
    console.log("====================================");
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((res) => resolve({ res, mes: "success" }))
      .catch((e) => reject(e));
  });
};

(function () {
  var apiHost = "https://nutthat.com/wp-json";
  const body = JSON.stringify({
    username: "tnhii",
    password: "Ht$lHRNp$Xl7KlEMRn6M)Xvl",
  });
  fetch(apiHost + "/jwt-auth/v1/token", {
    method: "POST",
    body,
  })
    .then((res) => res.json())
    .then((res) => console.log("success: ", res))
    .catch((e) => console.log("Fail: ", e));
})();
