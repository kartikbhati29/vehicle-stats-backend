//@desc Get all contacts
//@route GET /api/contacts
//@access public

const d = [
  {
    prizeName: "Iphone 14",
    detailedName: "Iphone 14 128GB Midnight",
    originalAmount: "79,999",
    amount: "15",
    joined: "8542",
    total: "10000",
    imageUrl: "https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg",
    description: `Get a chance to win this amazing Iphone 14 128GB Starlight at just ₹15. Buy the entry ticket and wait for contest to get filled completely.`,
    bigPrize: false,
  },
  {
    prizeName: "Samsung fold 3",
    detailedName: "Samsung galaxy fold 3 5G",
    originalAmount: "99,999",
    amount: "15",
    joined: "8500",
    total: "10000",
    imageUrl: "https://m.media-amazon.com/images/I/71MdaT+vH1L._SL1500_.jpg",
    bigPrize: false,
  },
  {
    prizeName: "One plus 10 pro",
    detailedName: "One plus 10 pro 12/256",
    originalAmount: "69,999",
    amount: "15",
    joined: "2500",
    total: "10000",
    imageUrl: "https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg",
    bigPrize: false,
  },
  {
    prizeName: "Volkswagen Virtus 2023",
    detailedName: "Volkswagen Virtus Highline 1.0 TSI MT",
    originalAmount: "17,50,000",
    amount: "50",
    joined: "10000",
    total: "40000",
    imageUrl:
      "https://imgd.aeplcdn.com/0x0/n/cw/ec/101055/virtus-exterior-right-front-three-quarter.jpeg?isig=0",
    bigPrize: true,
  },
];

const getContacts = (req, res) => {
  res.status(200).json({ status: "Get contacts", list: d });
};

//@desc Get contact by id
//@route GET /api/contacts/id
//@access public

const getContactbyId = (req, res) => {
  res.status(200).json({ status: `Get contacts by id ${req.params.id}` });
};

//@desc update contact by id
//@route PUT /api/contacts/id
//@access public

const updateContactbyId = (req, res) => {
  res.status(200).json({ status: `update contacts by id ${req.params.id}` });
};

//@desc new contact by id
//@route POST /api/contacts
//@access public

const newContact = (req, res) => {
  console.log(req.body);
  res.status(200).json({ status: `post contact` });
};

//@desc delete contact by id
//@route DELETE /api/contacts/id
//@access public

const deleteContactbyId = (req, res) => {
  res.status(200).json({ status: `delete contact by id ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContactbyId,
  updateContactbyId,
  newContact,
  deleteContactbyId,
};
