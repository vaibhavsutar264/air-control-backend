const express = require("express");
const bodyParser = require("body-parser");
// const mongoose, { ConnectOptions } = require("mongoose");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const pmParticlesRoutes = require("./routes/pmParticlesRoutes");
const pmLocationRoutes = require("./routes/pmLocationRoutes");
const mostWindyRoutes = require("./routes/mostWindyRoutes");
const userRoutes = require("./routes/userRoutes");

// data consts
const PmParticlesAtDelhi = require("./models/pmParticlesAtDelhi");
const PmParticlesAtKerala = require("./models/pmParticlesAtKerala");
const PmParticlesAtMumbai = require("./models/pmParticlesAtMumbai");
const pm1 = require("./models/pm1");
const pm2_5 = require("./models/pm2_5");
const pm10 = require("./models/pm10");
const mostWindyDays = require("./models/mostWindyDays");
const dataForMongodb = require("./data/index");

/* CONFIGURATION */
// dotenv.config({path:"server/config.env"});
// dotenv.config({path:"./config.env"})
// console.log(process.env);
if(process.env.NODE_ENV !== "production" ){
  dotenv.config({path:"./config.env"})
}
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/particles", pmParticlesRoutes);
app.use("/location", pmLocationRoutes);
app.use("/most-windy", mostWindyRoutes);
app.use("/users", userRoutes)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 4000;


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // pm1.insertMany(dataForMongodb.pm1ParticlesData)
    // mostWindyDays.insertMany(dataForMongodb.windyDaysData)
    // pm2_5.insertMany(dataForMongodb.pm2_5ParticlesData)
    // pm10.insertMany(dataForMongodb.pm10ParticlesData)
    // PmParticlesAtMumbai.insertMany(dataForMongodb.dataMumbai)
    // PmParticlesAtDelhi.insertMany(dataForMongodb.dataDelhi)
    // PmParticlesAtKerala.insertMany(dataForMongodb.dataKerala)
    // AffiliateStat.insertMany(dataForMongodb.dataAffiliateStat);
    // OverallStat.insertMany(dataForMongodb.dataOverallStat);
    // Product.insertMany(dataForMongodb.dataProduct);
    // ProductStat.insertMany(dataForMongodb.dataProductStat);
    // Transaction.insertMany(dataForMongodb.dataTransaction);
    // User.insertMany(dataForMongodb.dataUser);
  })
  .catch((error) => console.log(`${error} did not connect`));
