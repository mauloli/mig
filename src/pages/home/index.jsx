import React from "react";
import Navbar from "../../components/navbar";
import styles from "./Home.module.css";
import imageMig from "../../asset/mig1.png";
import imageMig1 from "../../asset/mig.jpeg";
function index() {
  return (
    <div className={styles.body}>
      <div className={`container `}>
        <Navbar />
        <div className=" d-flex p-1 flex-xl-row flex-column">
          <div className={`${styles.left_side} `}>
            <div>
              <img src={imageMig} style={{ width: "100%" }} alt="" />
              <img
                src={imageMig1}
                width="120px"
                height="120px"
                style={{
                  borderRadius: "100px",
                  position: "relative",
                  top: "-60px",
                  left: "65px",
                  border: "1px solid",
                }}
                alt=""
              />
            </div>
            <div className=" container text-center">
              <span className=" fw-bold">Mitramas Infosys Global</span>
              <p className={styles.span}>Layanan it</p>
              <div className=" d-flex justify-content-center align-items-center mb-2">
                <i class="bi bi-pencil me-1"></i>
                <span>Sunting profile</span>
              </div>
            </div>
            <div className=" container">
              <span className={styles.span}>Status Perusahaan</span>
              <div className=" d-flex justify-content-between mb-2">
                <span>Aktif</span>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked
                  />
                </div>
              </div>
              <div className=" d-flex flex-column mb-2">
                <span className={styles.span}>Singkatan</span>
                <span>MIG</span>
              </div>
              <div className=" d-flex flex-column mb-2">
                <span className={styles.span}>Alamat perusahan</span>
                <span>jl tebet raya</span>
              </div>
              <div className=" d-flex flex-column mb-2">
                <span className={styles.span}>Penanggung jawab PIC</span>
                <span>john doe</span>
              </div>
              <div className=" d-flex flex-column mb-2">
                <span className={styles.span}>Tanggal pkp</span>
                <span>03 maret 2021</span>
              </div>
              <div className=" d-flex flex-column mb-2">
                <span className={styles.span}>Email</span>
                <span>loremipsum@gmail.com</span>
              </div>
              <div className=" d-flex flex-column mb-2">
                <span className={styles.span}>No. Telp</span>
                <span>021562356</span>
              </div>
              <div className=" d-flex flex-column mb-2">
                <span className={styles.span}>Situs Web</span>
                <span>loremipsum.com</span>
              </div>
            </div>
          </div>
          <div className={`${styles.right_side} d-flex flex-column`}>
            <div className={`${styles.right_side__top} container`}>
              <div className=" d-flex justify-content-between mt-3">
                <span className=" fw-bold">Lokasi</span>
                <span>Lihat semua</span>
              </div>
              <div className=" d-xl-flex justify-content-between mt-5">
                <div className={styles.boxLocation}>
                  <i
                    class="bi bi-building"
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>
                  <div className=" d-flex flex-column">
                    <span className=" fw-bold">20</span>
                    <span>induk</span>
                  </div>
                </div>
                <div className={styles.boxLocation1}>
                  <i
                    class="bi bi-wrench"
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>
                  <div className=" d-flex flex-column">
                    <span className=" fw-bold">20</span>
                    <span>induk</span>
                  </div>
                </div>
                <div className={styles.boxLocation2}>
                  <i
                    class="bi bi-house-door"
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>
                  <div className=" d-flex flex-column">
                    <span className=" fw-bold">20</span>
                    <span>induk</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex mt-3 flex-xl-row flex-column">
              <div className={`${styles.sideBtm_left} d-flex flex-column`}>
                <div className={`${styles.btmLeft_top} container`}>
                  <div className=" d-flex justify-content-between mt-3">
                    <span className=" fw-bold ">Akun Bank</span>
                    <div
                      className=" text-center"
                      style={{
                        backgroundColor: "green",
                        width: "200px",
                        height: "30px",
                        color: "white",
                      }}
                    >
                      <span>+ Tambah akun bank</span>
                    </div>
                  </div>
                  <div className=" d-flex flex-column justify-content-between">
                    <div className=" d-flex mt-3">
                      <div style={{ flex: 1 }}>
                        <div className={styles.circle}>
                          <span className=" fw-bold">Visa</span>
                        </div>
                      </div>
                      <div style={{ flex: 2 }}>
                        <div className=" d-flex justify-content-between">
                          <span>Bank kb bukopin</span>
                          <div>
                            <i
                              style={{ color: "green" }}
                              class="bi bi-pencil me-3"
                            ></i>
                            <i style={{ color: "red" }} class="bi bi-trash"></i>
                          </div>
                        </div>
                        <div className=" d-flex flex-column">
                          <span>**** 0876 - yursron taufiq</span>
                          <span>idr</span>
                        </div>
                      </div>
                    </div>
                    <div className=" d-flex mt-3">
                      <div style={{ flex: 1 }}>
                        <div className={styles.circle}>
                          <span className=" fw-bold">Visa</span>
                        </div>
                      </div>
                      <div style={{ flex: 2 }}>
                        <div className=" d-flex justify-content-between">
                          <span>Bank kb bukopin</span>
                          <div>
                            <i
                              style={{ color: "green" }}
                              class="bi bi-pencil me-3"
                            ></i>
                            <i style={{ color: "red" }} class="bi bi-trash"></i>
                          </div>
                        </div>
                        <div className=" d-flex flex-column">
                          <span>**** 0876 - yursron taufiq</span>
                          <span>idr</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.btmLeft_btm}>
                  <div className=" d-flex justify-content-between">
                    <span className=" fw-bold">Relasi</span>
                    <span className="">Lihat semua</span>
                  </div>
                  <div className=" mt-4 d-flex flex-column">
                    <div className=" d-flex align-items-center">
                      <i class="bi bi-share me-4 fs-4"></i>
                      <div className=" d-flex flex-column">
                        <span className=" fw-bolder">20</span>
                        <span>memiliki</span>
                      </div>
                    </div>

                    <div className=" d-flex align-items-center my-3">
                      <i class="bi bi-share me-4 fs-4"></i>
                      <div className=" d-flex flex-column">
                        <span className=" fw-bolder">108</span>
                        <span>menggunakan</span>
                      </div>
                    </div>

                    <div className=" d-flex align-items-center">
                      <i class="bi bi-share me-4 fs-4"></i>
                      <div className=" d-flex flex-column">
                        <span className=" fw-bolder">67</span>
                        <span>memminjam</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.sideBtm_right}>
                <p className=" fw-bold">Aktivitas</p>
                <div className=" d-flex flex-column mt-4">
                  <span>
                    Yusron baru saja menambahkan lokasi baru kantor cabang
                    jagakarsa
                  </span>
                  <span className={styles.span}>hari ini 06:00</span>
                </div>
                <div className=" d-flex flex-column my-4">
                  <span>
                    Yusron baru saja menambahkan lokasi baru kantor cabang
                    jagakarsa
                  </span>
                  <span className={styles.span}>hari ini 06:00</span>
                </div>
                <div className=" d-flex flex-column">
                  <span>
                    Yusron baru saja menambahkan lokasi baru kantor cabang
                    jagakarsa
                  </span>
                  <span className={styles.span}>hari ini 06:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
