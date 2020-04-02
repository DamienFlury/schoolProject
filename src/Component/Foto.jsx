import React, { Component } from "react";
import schlieren3 from "./../images/schlieren1.png";
import h_1 from "./../images/1_h.jpg";
import h_2 from "./../images/2_h.jpg";
import h_3 from "./../images/3_h.jpg";
import h_4 from "./../images/4_h.jpg";
import h_5 from "./../images/5_h.jpg";
import iso_100 from "./../images/iso_100.jpg";
import iso_800 from "./../images/iso_800.jpg";
import tiefe_1 from "./../images/tiefe_1.jpg";
import tiefe_2 from "./../images/tiefe_2.jpg";
import eins_drei from "./../images/eins_drei_b.jpg";
import goldener from "./../images/goldener_b.png";
import h_2_abend from "./../images/2_h_abend.jpg";
import reactImage from "./../images/react.png";
import urheberrecht from "./../images/urheberrecht.PNG";
import ReactCompareImage from "react-compare-image";
import "./fotoStyle.css";
import $ from "jquery";

const Foto = () => (
  <div>
    <div className="container">
      <h1 className="title">Bilder</h1>
      <hr></hr>
      <h2 className="title">Software/Tools/Frameworks</h2>
      <table class="table table-striped">
        <tr>
          <th></th>
          <th>HTML only</th>
          <th>Spring Boot</th>
          <th>React</th>
          <th>Angular</th>
        </tr>
        <tr>
          <th>Vorkenntnisse</th>
          <td>5</td>
          <td>5</td>
          <td>3</td>
          <td>2</td>
        </tr>
        <tr>
          <th>Verfügbare Templates</th>
          <td>4</td>
          <td>4</td>
          <td>5</td>
          <td>5</td>
        </tr>
        <tr>
          <th>Umfang der Informationen</th>
          <td>4</td>
          <td>4</td>
          <td>5</td>
          <td>5</td>
        </tr>
        <tr>
          <th>Komplexität (einfach)</th>
          <td>5</td>
          <td>4</td>
          <td>3</td>
          <td>3</td>
        </tr>
        <tr>
          <th>Result</th>
          <td>18</td>
          <td>17</td>
          <td>16</td>
          <td>15</td>
        </tr>
      </table>

      <h3 className="title">Entscheidung</h3>
      <p className="text">
        Wir man in der Grafik oben sehen kann sind die Resultate alle ziemlich
        nahe anneinander. Jedoch ist ein grosser Wissensunterschieden zwischen
        den verschiedenen Möglichkeiten vorhanden. Bei HTML und Spring Boot mit
        HTML habe ich am meisten Vorkenntnisse. Bei React und Angular nicht so
        viel bis jetzt.
      </p>
      <p className="text">Weshalb habe ich mich nun für React entschieden?</p>
      <p className="text">
        Ich wollte schon länger ein Projekt mit React machen und dort mein
        Wissen ausbeuen, hatte jedoch nie die Möglichkeit oder Zeit, dies
        umzusetzen. Bei diesem Projekt sah ich dann aber die Möglichkeit,
        welches es mir verschaffte. Mehr wissen in React zu erlangen.
      </p>
      <img className="textImageStyle" src={reactImage}></img>
      <hr></hr>
      <h2 className="title">Urheberrecht</h2>
      <p className="text">
        Ich halte das Urheberrecht ein, indem ich eigene Bilder benutze, an
        welchen ich das Recht habe.
      </p>
      <p className="text">
        Wenn ich Medien von Dritten Benutze, was hier gegeben ist, überprüfe
        ich, wie das Benutzungsrecht ist. Bei unter anderem Google kann man
        Bilder mit Nutzungsrechten anzeigen, damit man weiss, welche man frei
        verwenden kann.
      </p>
      <img className="imageStyle" src={urheberrecht}></img>
      <hr></hr>
      <h2 className="title">Formate</h2>
      <h3 className="title">Welche Formate sollte ich kennen?</h3>

      <h3 className="title">GIF</h3>
      <p className="text">
        Das GIF Format wird für simple Webgrafiken mit beschränkter Farbwahl
        verwendet. Wegen der Beschränkung auf 256 Farben ist GIF das Bildformat
        mit der geringsten Speicherplatz-Belegung. GIF-Bilder haben kurze
        Ladezeiten. Für Fotos und Bilder mit vielen Nuancen ist dieses Format
        ungeeignet. GIF ist bestens geeignet für kleine grafische Elemente wie
        Diagramme, Clip Art oder Buttons. GIF-Bilder können mit transparentem
        Hintergrund gespeichert werden.
      </p>
      <h3 className="title">PNG</h3>
      <p className="text">
        Dieses Format ist nicht mit allen Anwendungen kompatibel. Allerdings
        bietet es die Möglichkeit, kleine Dateien bei bleibend hoher Qualität zu
        nutzen. So können z.B. Logos und kleine Bilder mit Tausenden von
        Farbschattierungen korrekt weiterverarbeitet werden. PNG-Bilder können
        mit transparentem Hintergrund gespeichert werden und werden im Internet
        meist für kleinere Bilder Icons verwendet.
      </p>
      <h3 className="title">JPEG</h3>
      <p className="text">
        Das Format für digitale Bilder unterstützt das volle Farbspektrum. Es
        ist das kompatibelste und universell nutzbarste Bildformat. Fast alle
        Anwendungen können JPEG öffnen und in JPEG konvertieren. Das Scannen und
        Einlesen von Fotos aus Digitalkameras geschieht häufig im JPEG-Format.
        Für Bildansichten mit geringer Auflösung im Internet (Beanspruchung von
        wenig Speicherplatz) ist es ideal. Bei Komprimierung kommt es zu
        Verlusten von Bildinformationen. JPEG ist, im Gegensatz zu
        vektorgraphischen Formaten (basierend auf Vektoren), ein pixelbasiertes
        Format (basierend auf Bildpunkte).
      </p>
      <h3 className="title">SVG</h3>
      <p className="text">
        SVG steht für "Scalable Vector Graphics" und ist ein Dateiformat für
        Vektorgrafiken. Dieses basiert auf XML. <br></br>
      </p>
      <p>Beispiel: </p>
      <div className="codeContainer">
        <code>
          &lt;svg xmlns="http://www.w3.org/2000/svg" width="300"
          height="200"&gt; <br></br> &lt;rect x="50" y="50" width="200"
          height="100" style="fill:red" /&gt; <br></br> &lt;/svg&gt;
        </code>
      </div>
      <p className="text">
        Quelle:
        https://www.programmfabrik.de/wissen/bildformate-gif-png-jpg-tiff/
      </p>
      <p className="text">
        Quelle: https://inkscape.org/de/entwickeln/das-svg-format/
      </p>
      <hr></hr>
      <h2 className="title">Fotografieren</h2>

      <div className="row">
        <div className="col col-sm-4 ">
          <div className="cardContainer">
            <div className="imgContainer">
              <ReactCompareImage leftImage={tiefe_1} rightImage={tiefe_2} />
            </div>
            <div className="textContainer">
              <p className="p">Tiefenschärfe</p>
            </div>
          </div>
        </div>

        <div className="col col-sm-4 ">
          <div className="cardContainer">
            <div className="imgContainer">
              <ReactCompareImage leftImage={iso_100} rightImage={iso_800} />
            </div>
            <div className="textContainer">
              <p className="p">ISO Empfindlichkeit</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-4">
          <div className="cardContainer">
            <div className="imgContainer">
              <img className="imageStyle" src={eins_drei}></img>
            </div>
            <div className="textContainer">
              <p className="p">1/3</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-4">
          <div className="cardContainer">
            <div className="imgContainer">
              <img className="imageStyle" src={goldener}></img>
            </div>
            <div className="textContainer">
              <p className="p">goldener Schnitt</p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2 className="title">Bildbearbeitung / Bildaufbereitung</h2>
      <div className="row">
        <div className="col col-sm-4 ">
          <div className="cardContainer">
            <div className="imgContainer">
              <ReactCompareImage leftImage={h_3} rightImage={h_2} />
            </div>
            <div className="textContainer">
              <p className="p">Retouche</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-4 ">
          <div className="cardContainer">
            <div className="imgContainer">
              <img className="imageStyle image" src={h_2}></img>
              <div className="middleContainer">
                <p className="middleText">Standart Kamera</p>
              </div>
            </div>
            <div className="textContainer">
              <p className="p">Unschärfecx</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-4 ">
          <div className="cardContainer">
            <div className="imgContainer">
              <img className="imageStyle image" src={h_3}></img>
              <div className="middleContainer">
                <p className="middleText">Standart Kamera</p>
              </div>
            </div>
            <div className="textContainer">
              <p className="p">ISO Empfindlichkeit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-4">
          <div className="cardContainer">
            <div className="imgContainer">
              <img className="imageStyle image" src={h_4}></img>
              <div className="middleContainer">
                <p className="middleText">Standart Kamera</p>
              </div>
            </div>
            <div className="textContainer">
              <p className="p">1/3</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-4">
          <div className="cardContainer">
            <div className="imgContainer">
              <img className="imageStyle image" src={h_5}></img>
              <div className="middleContainer">
                <p className="middleText">Standart Kamera</p>
              </div>
            </div>
            <div className="textContainer">
              <p className="p">goldener Schnitt</p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2 className="title">Konzept und Umsetzung</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col col-sm-4 ">
          <div className="cardContainer">
            <div className="imgContainer">
              <img className="imageStyle image" src={h_1}></img>
              <div className="middleContainer">
                <p className="middleText">Standart Kamera</p>
              </div>
            </div>
            <div className="textContainer">
              <p className="p">Gaswerk (früher)</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-4 ">
          <div className="cardContainer">
            <div className="imgContainer">
              <img className="imageStyle image" src={h_2}></img>
              <div className="middleContainer">
                <p className="middleText">Standart Kamera</p>
              </div>
            </div>
            <div className="textContainer">
              <p className="p">Glocken Turm</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-4 ">
          <div className="cardContainer">
            <div className="imgContainer">
              <img className="imageStyle image" src={h_3}></img>
              <div className="middleContainer">
                <p className="middleText">Standart Kamera</p>
              </div>
            </div>
            <div className="textContainer">
              <p className="p">Limmat</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-4">
          <div className="cardContainer">
            <div className="imgContainer">
              <img className="imageStyle image" src={h_4}></img>
              <div className="middleContainer">
                <p className="middleText">Standart Kamera</p>
              </div>
            </div>
            <div className="textContainer">
              <p className="p">Wohnort</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-4">
          <div className="cardContainer">
            <div className="imgContainer">
              <img className="imageStyle image" src={h_5}></img>
              <div className="middleContainer">
                <p className="middleText">Standart Kamera</p>
              </div>
            </div>
            <div className="textContainer">
              <p className="p">Gaswerk (heute)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide imagetest"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={h_1} alt="First slide" />
            <div class="carousel-caption">
              <h3>Gaswerk (früher)</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={h_2} alt="Second slide" />
            <div class="carousel-caption">
              <h3>Glocken Turm</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={h_3} alt="Third slide" />
            <div class="carousel-caption">
              <h3>Limmat</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={h_4} alt="Fourth slide" />
            <div class="carousel-caption">
              <h3>Wohnort</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={h_5} alt="Fifth slide" />
            <div class="carousel-caption">
              <h3>Gaswerk (heute)</h3>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <br></br>
    <div className="container">
      <ReactCompareImage leftImage={h_2_abend} rightImage={h_2} />
    </div>
    <br></br>

    <p> &copy; {new Date().getFullYear()} Copyright: Sascha Huber </p>
  </div>
);

export default Foto;
