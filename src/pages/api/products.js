import shopItems from "@/data/shopItems";

function handler(req, res){
  if(req.method === "GET"){
    res.status(200).json(shopItems);
  }
}
export default handler;
// export default function handler(req, res) {
//   res.status(200).json(shopItems);
// }
