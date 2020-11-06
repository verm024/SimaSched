$("#test").hide();
$("#table").hide();

function encode(r) {
  return r.replace(/[\x26\x0A\<>'"]/g, function (r) {
    return "&#" + r.charCodeAt(0) + ";";
  });
}

function setJadwal() {
  $("#jadwal-content").empty();
  try {
    var script = document.getElementById("get-source").value;
    var split = script.split(
      '<div class="table-light table-primary" style="overflow: auto;">'
    );
    var split2 = split[1].split("</div>");
    var html = $.parseHTML(split2[0]);
    $("#test").append(html);
    var tr = $("tr");
    var matkul;
    var jadwal = [];
    let c = 1;
    for (let i = 1; i < tr.length - 1; i++) {
      let td = $(tr[i]).children();
      var temp = $(td[2]).children();
      matkul = temp[0].textContent;
      var temp = $(td[6]).children();
      if (temp[0] != undefined) {
        var tempJadwal = td[6].outerHTML.split('<td nowrap="">');
        tempJadwal = tempJadwal[1].split("</td>");
        tempJadwal = tempJadwal[0].split("<br>");
        var j;
        for (j = 0; j < tempJadwal.length; j++) {
          var tempJadwal2 = tempJadwal[j].split(",");
          var tempJam2 = tempJadwal[j].split(" ");
          var jam = tempJam2[1].split("-");
          if (tempJadwal2[0] == "Senin") {
            if (tempJam2[3] == "LAB.KOM" || tempJam2.length > 4) {
              for (let k = 4; k < tempJam2.length; k++) {
                tempJam2[3] = tempJam2[3] + " " + tempJam2[k];
              }
            }
            var date = new Date("2019-08-12 " + jam[0]);
            jadwal[c] = {
              mata_kuliah: matkul,
              date: date,
              ruang: tempJam2[3],
              jam: tempJam2[1],
            };
            c++;
          } else if (tempJadwal2[0] == "Selasa") {
            if (tempJam2[3] == "LAB.KOM" || tempJam2.length > 4) {
              for (let k = 4; k < tempJam2.length; k++) {
                tempJam2[3] = tempJam2[3] + " " + tempJam2[k];
              }
            }
            var date = new Date("2019-08-13 " + jam[0]);
            jadwal[c] = {
              mata_kuliah: matkul,
              date: date,
              ruang: tempJam2[3],
              jam: tempJam2[1],
            };
            c++;
          } else if (tempJadwal2[0] == "Rabu") {
            if (tempJam2[3] == "LAB.KOM" || tempJam2.length > 4) {
              for (let k = 4; k < tempJam2.length; k++) {
                tempJam2[3] = tempJam2[3] + " " + tempJam2[k];
              }
            }
            var date = new Date("2019-08-14 " + jam[0]);
            jadwal[c] = {
              mata_kuliah: matkul,
              date: date,
              ruang: tempJam2[3],
              jam: tempJam2[1],
            };
            c++;
          } else if (tempJadwal2[0] == "Kamis") {
            if (tempJam2[3] == "LAB.KOM" || tempJam2.length > 4) {
              for (let k = 4; k < tempJam2.length; k++) {
                tempJam2[3] = tempJam2[3] + " " + tempJam2[k];
              }
            }
            var date = new Date("2019-08-15 " + jam[0]);
            jadwal[c] = {
              mata_kuliah: matkul,
              date: date,
              ruang: tempJam2[3],
              jam: tempJam2[1],
            };
            c++;
          } else if (tempJadwal2[0] == "Jumat") {
            if (tempJam2[3] == "LAB.KOM" || tempJam2.length > 4) {
              for (let k = 4; k < tempJam2.length; k++) {
                tempJam2[3] = tempJam2[3] + " " + tempJam2[k];
              }
            }
            var date = new Date("2019-08-16 " + jam[0]);
            jadwal[c] = {
              mata_kuliah: matkul,
              date: date,
              ruang: tempJam2[3],
              jam: tempJam2[1],
            };
            c++;
          }
        }
      } else {
        var tempJadwal = td[6].textContent.split(",");
        var tempJam = td[6].textContent.split(" ");
        var jam = tempJam[1].split("-");
        if (tempJadwal[0] == "Senin") {
          if (tempJam[3] == "LAB.KOM" || tempJam.length > 4) {
            for (let k = 4; k < tempJam.length; k++) {
              tempJam[3] = tempJam[3] + " " + tempJam[k];
            }
          }
          var date = new Date("2019-08-12 " + jam[0]);
          jadwal[c] = {
            mata_kuliah: matkul,
            date: date,
            ruang: tempJam[3],
            jam: tempJam[1],
          };
        } else if (tempJadwal[0] == "Selasa") {
          if (tempJam[3] == "LAB.KOM" || tempJam.length > 4) {
            for (let k = 4; k < tempJam.length; k++) {
              tempJam[3] = tempJam[3] + " " + tempJam[k];
            }
          }
          var date = new Date("2019-08-13 " + jam[0]);
          jadwal[c] = {
            mata_kuliah: matkul,
            date: date,
            ruang: tempJam[3],
            jam: tempJam[1],
          };
        } else if (tempJadwal[0] == "Rabu") {
          if (tempJam[3] == "LAB.KOM" || tempJam.length > 4) {
            for (let k = 4; k < tempJam.length; k++) {
              tempJam[3] = tempJam[3] + " " + tempJam[k];
            }
          }
          var date = new Date("2019-08-14 " + jam[0]);
          jadwal[c] = {
            mata_kuliah: matkul,
            date: date,
            ruang: tempJam[3],
            jam: tempJam[1],
          };
        } else if (tempJadwal[0] == "Kamis") {
          if (tempJam[3] == "LAB.KOM" || tempJam.length > 4) {
            for (let k = 4; k < tempJam.length; k++) {
              tempJam[3] = tempJam[3] + " " + tempJam[k];
            }
          }
          var date = new Date("2019-08-15 " + jam[0]);
          jadwal[c] = {
            mata_kuliah: matkul,
            date: date,
            ruang: tempJam[3],
            jam: tempJam[1],
          };
        } else if (tempJadwal[0] == "Jumat") {
          if (tempJam[3] == "LAB.KOM" || tempJam.length > 4) {
            for (let k = 4; k < tempJam.length; k++) {
              tempJam[3] = tempJam[3] + " " + tempJam[k];
            }
          }
          var date = new Date("2019-08-16 " + jam[0]);
          jadwal[c] = {
            mata_kuliah: matkul,
            date: date,
            ruang: tempJam[3],
            jam: tempJam[1],
          };
        }
        c++;
      }
    }
    jadwal.sort(function (a, b) {
      return a.date.getTime() - b.date.getTime();
    });
    i = 1;
    let senin = [];
    let selasa = [];
    let rabu = [];
    let kamis = [];
    let jumat = [];
    let cSenin = 0;
    let cSelasa = 0;
    let cRabu = 0;
    let cKamis = 0;
    let cJumat = 0;
    jadwal.forEach(function () {
      if (jadwal[i - 1].date.getDay() == 1) {
        senin[cSenin] = jadwal[i - 1];
        cSenin++;
      } else if (jadwal[i - 1].date.getDay() == 2) {
        selasa[cSelasa] = jadwal[i - 1];
        cSelasa++;
      } else if (jadwal[i - 1].date.getDay() == 3) {
        rabu[cRabu] = jadwal[i - 1];
        cRabu++;
      } else if (jadwal[i - 1].date.getDay() == 4) {
        kamis[cKamis] = jadwal[i - 1];
        cKamis++;
      } else if (jadwal[i - 1].date.getDay() == 5) {
        jumat[cJumat] = jadwal[i - 1];
        cJumat++;
      }
      i++;
    });
    var table = document.getElementById("jadwal-content");
    i = 0;
    var content = "<tr><td>Senin</td><td>";
    senin.forEach(function () {
      var temp =
        "<p style='line-height: 1; margin-bottom: 5px;'><b>" +
        senin[i].mata_kuliah +
        "</b><br>" +
        "<span style='font-size: 12px;'>" +
        senin[i].jam +
        " | " +
        senin[i].ruang +
        "<br></span></p>";
      if (content != "") {
        content = content + temp;
      } else {
        content = content + "<br>" + temp;
      }
      i++;
    });
    content = content + "</td></tr><tr><td>Selasa</td><td>";
    i = 0;
    selasa.forEach(function () {
      var temp =
        "<p style='line-height: 1; margin-bottom: 5px;'><b>" +
        selasa[i].mata_kuliah +
        "</b><br>" +
        "<span style='font-size: 12px;'>" +
        selasa[i].jam +
        " | " +
        selasa[i].ruang +
        "<br></span></p>";
      if (content != "") {
        content = content + temp;
      } else {
        content = content + "<br>" + temp;
      }
      i++;
    });
    content = content + "</td></tr><tr><td>Rabu</td><td>";
    i = 0;
    rabu.forEach(function () {
      var temp =
        "<p style='line-height: 1; margin-bottom: 5px;'><b>" +
        rabu[i].mata_kuliah +
        "</b><br>" +
        "<span style='font-size: 12px;'>" +
        rabu[i].jam +
        " | " +
        rabu[i].ruang +
        "<br></span></p>";
      if (content != "") {
        content = content + temp;
      } else {
        content = content + "<br>" + temp;
      }
      i++;
    });
    content = content + "</td></tr><tr><td>Kamis</td><td>";
    i = 0;
    kamis.forEach(function () {
      var temp =
        "<p style='line-height: 1; margin-bottom: 5px;'><b>" +
        kamis[i].mata_kuliah +
        "</b><br>" +
        "<span style='font-size: 12px;'>" +
        kamis[i].jam +
        " | " +
        kamis[i].ruang +
        "<br></span></p>";
      if (content != "") {
        content = content + temp;
      } else {
        content = content + "<br>" + temp;
      }
      i++;
    });
    content = content + "</td></tr><tr><td>Jumat</td><td>";
    i = 0;
    jumat.forEach(function () {
      var temp =
        "<p style='line-height: 1; margin-bottom: 5px;'><b>" +
        jumat[i].mata_kuliah +
        "</b><br>" +
        "<span style='font-size: 12px;'>" +
        jumat[i].jam +
        " | " +
        jumat[i].ruang +
        "<br></span></p>";
      if (content != "") {
        content = content + temp;
      } else {
        content = content + "<br>" + temp;
      }
      i++;
    });
    content = content + "</td></tr>";
    table.innerHTML = content;
    $("#table").show();
  } catch (error) {
    alert("Source code salah");
    window.location = "index.html";
  }
}
