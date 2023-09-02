async function loadData(id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  console.log(data);
  const sec = document.getElementById("card-sec");
  sec.classList = "p-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4";
  sec.innerHTML = "";
  data.data.forEach(function (element) {
    const div = document.createElement("div");
    div.classList = "card card-compact bg-gray-100 shadow-xl";
    div.innerHTML = `
                <figure><img class="w-[300px] h-[200px]" src="${element.thumbnail}" alt="Shoes" /></figure>
                <div class="card-body">
                    <div class="flex gap-3">
                        <div><img class="rounded-full w-10 h-10" src="${element.authors[0].profile_picture}" alt=""></div>
                        <h2 class="card-title text-black font-bold">${element.title}</h2>
                    </div>
                    <div class="pl-12 text-gray-600">
                        <div id="${element.title}">
                            <p class="inline">${element.authors[0].profile_name}</p>
                        </div>
                        <p>${element.others.views} views</p>
                    </div>
                </div>
    `;
    sec.appendChild(div);
    if (element.authors[0].verified) {
      document.getElementById(element.title).innerHTML = `
        <p class="inline">${element.authors[0].profile_name}</p>
        <img id class="inline" src="images/verified.png" alt="">
        `;
    }
  });
}

loadData("1000");

function btnBlog() {
  window.location.href = "blog.html";
}

function btnMusic() {
  document.getElementById("btn-music").classList =
    "btn btn-sm bg-[#FF1F3D] text-white border-none rounded";
  document.getElementById("btn-all").classList =
    "btn btn-sm bg-gray-300 text-gray-700 border-none rounded";
  document.getElementById("btn-comedy").classList =
    "btn btn-sm bg-gray-300 text-gray-700 border-none rounded";
  document.getElementById("btn-drawing").classList =
    "btn btn-sm bg-gray-300 text-gray-700 border-none rounded";
  loadData("1001");
}
function btnComedy() {
  document.getElementById("btn-comedy").classList =
    "btn btn-sm bg-[#FF1F3D] text-white border-none rounded";
  document.getElementById("btn-all").classList =
    "btn btn-sm bg-gray-300 text-gray-700 border-none rounded";
  document.getElementById("btn-music").classList =
    "btn btn-sm bg-gray-300 text-gray-700 border-none rounded";
  document.getElementById("btn-drawing").classList =
    "btn btn-sm bg-gray-300 text-gray-700 border-none rounded";
  loadData("1003");
}
function btnDrawing() {
  document.getElementById("btn-drawing").classList =
    "btn btn-sm bg-[#FF1F3D] text-white border-none rounded";
  document.getElementById("btn-all").classList =
    "btn btn-sm bg-gray-300 text-gray-700 border-none rounded";
  document.getElementById("btn-comedy").classList =
    "btn btn-sm bg-gray-300 text-gray-700 border-none rounded";
  document.getElementById("btn-music").classList =
    "btn btn-sm bg-gray-300 text-gray-700 border-none rounded";
  document.getElementById("card-sec").innerHTML = "";
  document.getElementById("card-sec").classList =
    "p-20 text-center items-center";

  document.getElementById("card-sec").innerHTML = `
  <div><img class="mx-auto" src="images/Icon.png" alt=""></div>
  <div>
      <h1 class="text-4xl font-bold text-black">Oops!! Sorry, There is no <br> content here</h1>
  </div>
  `;
}
function btnAll() {
  document.getElementById("btn-all").classList =
    "btn btn-sm bg-[#FF1F3D] text-white border-none rounded";
  document.getElementById("btn-music").classList =
    "btn btn-sm bg-gray-300 text-gray-700 border-none rounded";
  document.getElementById("btn-comedy").classList =
    "btn btn-sm bg-gray-300 text-gray-700 border-none rounded";
  document.getElementById("btn-drawing").classList =
    "btn btn-sm bg-gray-300 text-gray-700 border-none rounded";
  loadData("1000");
}
