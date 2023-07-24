heide();
show(0);
var render = 0;

document.querySelector(".next").addEventListener("click", () => {
  next();
 
});

document.querySelector(".back").addEventListener("click", () => {
  back();
});

function next() {
  render++;
  heide();
  if (render > $(".imgasl").length - 1) {
    render = 0;
  }
  show(render);
}

function show(e) {
  $(".imgasl").eq(e).show();
}
function heide() {
  $(".imgasl").hide();
}

function back() {
  render--;
  heide();
  if (render < 0) {
    render = 6;
  }
  show(render);
}