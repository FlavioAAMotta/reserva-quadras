import cors from "cors";
import { AddressInfo } from "net";
import express from "express";
import { userRouter } from "./routes/UserRouter";

const app = express();
app.use(express.json());
app.use(cors())

app.use("/users", userRouter)

const server = app.listen(3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${address.port}`)
    }else{
        console.log(`Falha ao rodar o servidor`)
    }
})