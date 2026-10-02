const express=require("express");
const path=require("path");
const fs=require("fs");

const app=express();
const PORT=process.env.PORT||3000;
const floodData=JSON.parse(fs.readFileSync(path.join(__dirname,"public/data/flood-data.json"),"utf8"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
const stats={
 total:floodData.length,
 low:floodData.filter(x=>x.muc_do==="Thấp").length,
 medium:floodData.filter(x=>x.muc_do==="Trung bình").length,
 high:floodData.filter(x=>x.muc_do==="Cao").length,
 events:floodData.reduce((s,x)=>s+x.so_lan_ngap,0),
 basins:[...new Set(floodData.map(x=>x.luu_vuc))].length
};

app.get("/",(req,res)=>res.render("dashboard",{floodData,stats}));
app.get("/dashboard",(req,res)=>res.render("dashboard",{floodData,stats}));
app.get("/map",(req,res)=>res.render("map",{floodData,stats}));
app.get("/data",(req,res)=>res.render("data",{floodData,stats}));
app.get("/warning",(req,res)=>res.render("warning",{floodData,stats}));
app.get("/statistics",(req,res)=>res.render("statistics",{floodData,stats}));
app.use(express.static(path.join(__dirname,"public")));

app.listen(PORT,()=>console.log(`🌊 WebGIS đang chạy tại http://localhost:${PORT}`));
