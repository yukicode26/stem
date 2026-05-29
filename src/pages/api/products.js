import shopItems from "@/data/shopItems";

export default function handler(req, res) {
  res.status(200).json({ shopItems });
}
