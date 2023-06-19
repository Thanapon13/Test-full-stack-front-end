// 4.1 SELECT ข้อมูล STORE ที่มี Region เป็น East
// ตอบ const store = await Store.findOne({ Region: 'East' });

// 4.2 SELECT ข้อมูล PRODUCT ที่มีขายใน STORE New York
// ตอบ const products = await Product.findAll({
//     include: [{
//       model: SalesFact,
//       include: [{
//         model: Store,
//         where: { City: 'New York' }
//       }]
//     }]
//   });

// 4.3 SELECT ยอดรวม Profit ของ STORE New York
// ตอบ const totalProfit = await SalesFact.sum('Profit', {
//     include: [{
//       model: Store,
//       where: { City: 'New York' }
//     }]
//   });

// 4.4 DELETE ข้อมูล SALE_FACT ที่PRODUCT มีBrand เป็น Wolf
//  ตอบ await SalesFact.destroy({
//    include:[{
//     mode:Product
//     where: {
//         Brand: Wolf
//       }
//    }]
//   });

// 4.5 UPDATE Brand ของ PRODUCT ที่มีDescription เป็น Toy Story ให้Brand เป็น W
// ตอบ await Product.update({
//   {Brand: "W"},{where: { Description: "Toy Story"}}
// });
