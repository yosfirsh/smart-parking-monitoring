// Inisialisasi Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDMNh9z9Sbg_rePdpCd4AqgmhbwXaCzwA8",
  authDomain: "sistem-monitoring-parkir.firebaseapp.com",
  databaseURL: "https://sistem-monitoring-parkir-default-rtdb.firebaseio.com",
  projectId: "sistem-monitoring-parkir",
  storageBucket: "sistem-monitoring-parkir.appspot.com",
  messagingSenderId: "626204016367",
  appId: "1:626204016367:web:c358f15b16d99be55e251a",
  measurementId: "G-K2X0S3X1NW"
};

// Inisialisasi App Firebase
firebase.initializeApp(firebaseConfig);

// Referensi database Firebase
var dbRef = firebase.database().ref("/");

// Mendengarkan perubahan pada database Firebase
dbRef.on("value", function(snapshot) {
  // Mendapatkan data parkir dari database Firebase
  var parkirData = snapshot.val();

  console.log(parkirData); // tampilkan nilai dari parkirData di console

  // Mengupdate warna kotak-kotak sesuai data parkir
  if (parkirData.parkir_1 === 1) {
    document.getElementById("parkir_1").style.backgroundColor = "red";
  } else {
    document.getElementById("parkir_1").style.backgroundColor = "green";
  }

  if (parkirData.parkir_2 === 1) {
    document.getElementById("parkir_2").style.backgroundColor = "red";
  } else {
    document.getElementById("parkir_2").style.backgroundColor = "green";
  }

  if (parkirData.parkir_3 === 1) {
    document.getElementById("parkir_3").style.backgroundColor = "red";
  } else {
    document.getElementById("parkir_3").style.backgroundColor = "green";
  }

  if (parkirData.parkir_4 === 1) {
    document.getElementById("parkir_4").style.backgroundColor = "red";
  } else {
    document.getElementById("parkir_4").style.backgroundColor = "green";
  }

  if (parkirData.parkir_5 === 1) {
    document.getElementById("parkir_5").style.backgroundColor = "red";
  } else {
    document.getElementById("parkir_5").style.backgroundColor = "green";
  }

  if (parkirData.gerbang === 1) {
    document.getElementById("card-gerbang").style.backgroundColor = "#2c9823";
    document.getElementById("gerbang").innerText = "Tidak Penuh";
  } else {
    document.getElementById("card-gerbang").style.backgroundColor = "red";
    document.getElementById("gerbang").innerText = "Penuh";
  }

  let shouldSkip = false;
  let valueRekomendasi = "-";
  Object.keys(parkirData).forEach(key=>{
    if (parkirData[key] === 0) {

      if (!shouldSkip) {
      let split = ('' +key).split("_");
      if (split.length < 2) {
      }else{

        let value = split.length > 1 ? split[1] : '-';
        valueRekomendasi = `0${value}`
        shouldSkip = true;
 
      }
      
    }
  }else{
    document.getElementById("rekomendasi").innerText = '-'
  }

  document.getElementById("rekomendasi").innerText = `${valueRekomendasi}`;

    })

});
