CREATE TABLE dinosaursdb (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
imageurl VARCHAR(200) NULL,
length VARCHAR(100) NOT NULL,
weight VARCHAR(100) NOT NULL,
habitat VARCHAR(100) NOT NULL);

INSERT INTO dinosaursdb (
name,
imageurl,
length,
weight,
habitat)
VALUES (
'Tyrannosaurus Rex',
'http://www.sciencekids.co.nz/images/pictures/dinosaurs/tyrannosaurusrex/trexroar.jpg',
'42 feet',
'7 tons',
'Temperate Coniferous Forest'
),
(
'Velociraptor',
'http://www.sciencekids.co.nz/images/pictures/dinosaurs/velociraptor.jpg',
'6 feet',
'33 lbs',
'Desert'
),
(
'Triceratops',
'http://www.sciencekids.co.nz/images/pictures/dinosaurs/triceratops/triceratopsfacesketch.JPG',
'26 feet',
'12 tons',
'Temperate Coniferous Forest'
),
(
'Brachiosaurus',
'http://www.sciencekids.co.nz/images/pictures/dinosaurs/brachiosaurusdrawing.jpg',
'85 feet',
'50 tons',
'Temperate Deciduous Forest'
),
(
'Stegosaurus',
'http://www.sciencekids.co.nz/images/pictures/dinosaurs/stegosaurus/stegosaurusillustration.jpg',
'30 ft',
'5 tons',
'Grassland'
),
(
'Iguanodon',
'http://www.sciencekids.co.nz/images/experiments/iguanodon170.jpg',
'33 feet',
'3.5 tons',
'Temperate Deciduous Forest'
);

// let allDinos = [
//   {
//     id: 1,
//     name: 'Tyrannosaurus Rex',
//     color: ['Green', 'Tan'],
//     length: '42 feet',
//     weight: '7 tons',
//     habitat: 'Temperate Coniferous Forest'
//   },
//   {
//     id: 2,
//     name: 'Velociraptor',
//     color: ['Green', 'Orange'],
//     length: '6 feet',
//     weight: '33 lbs',
//     habitat: 'Desert'
//   },
//   {
//     id: 3,
//     name: 'Triceratops',
//     color: ['Tan', 'Brown'],
//     length: '26 feet',
//     weight: '12 tons',
//     habitat: 'Temperate Coniferous Forest'
//   },
//   {
//     id: 4,
//     name: 'Brachiosaurus',
//     color: ['Gray', 'Tan'],
//     length: '85 feet',
//     weight: '50 tons',
//     habitat: 'Temperate Deciduous Forest'
//   },
//   {
//     id: 5,
//     name: 'Stegosaurus',
//     color: ['Green', 'Orange', 'Tan'],
//     length: '30 ft',
//     weight: '5 tons',
//     habitat: 'Grassland'
//   },
//   {
//     id: 6,
//     name: 'Iguanodon',
//     color: ['Brown', 'Tan'],
//     length: '33 feet',
//     weight: '3.5 tons',
//     habitat: 'Temperate Deciduous Forest'
//   }
// ]
