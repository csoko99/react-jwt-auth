import axios from 'axios';
import React,{useState} from 'react'




function FileUpload(props) {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        let bemenet={
            bevitel1:props.szoveg
          }
        try {
            const res = await axios.post(
                "http://localhost:8080/upload",
                formData
            );
            console.log(res);

            let bemenet={
      
                bevitel1:props.nev,
                bevitel2:props.datum,
                bevitel3:props.mufaj,
                bevitel4:props.evad,
                bevitel5:props.trailer
                
              }
          
             
          
          
              fetch('http://localhost:8080/anime_felvitel',{
                method: "POST",
                body: JSON.stringify(bemenet),
                headers: {"Content-type": "application/json; charset=UTF-8"}
              }
                 
              )
              .then((response) => response.text())
              .then((szoveg) => {
          
              alert(szoveg)
               
          
          })
          let leiras_felvitel={
              leiras:props.leiras
        }
          fetch('http://localhost:8080/leiras_felvitel',{
            method: "POST",
            body: JSON.stringify(leiras_felvitel),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          }
             
          )
          .then((response) => response.text())
          .then((szoveg) => {
          
          alert(szoveg)
           
          
          })


        } catch (ex) {
            console.log(ex);
        }
        alert("A felvitel sikerült");
    };

        return (
            <div className="App" style={{padding: 20, textAlign: 'center'}}>
                <input type="file" onChange={saveFile} />
                <button onClick={uploadFile} style={{backgroundColor:'grey'}}>Felvitel</button>
            </div>
        );
}

export default FileUpload;