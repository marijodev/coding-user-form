import { render, screen } from '@testing-library/react';
import {hasSpecialCharts, getSanitizedAdress, isPOBoxAdress} from '../../pages/model/adress';
import '@testing-library/jest-dom';

describe('Adress public functions', () => {
      const dataSet = [
    ["PO 12345", "PO 12345", true ],
    ["P.O. Box 123", "PO Box 123", true ],
    ["123 Pool Ave", "123 Pool Ave", false ],
    ["123 Box Elder Way", "123 Box Elder Way", false ],
    ["BOX 124 4900", "BOX 124 4900", false ],
    ["PO 123 NE 52nd St", "PO 123 NE 52nd St", false ],
    ["5489 (1) State St.", "5489 1 State St", false ],
    ["NE PO #123 53rd Box", "NE PO 123 53rd Box", false ],
    ];

  it('hasSpecialCharts funtion with portuguese chart ', () => {
    const expectedResult = true;
    const actualResult= hasSpecialCharts("Çtesting")
    //Assert
    expect(actualResult).toBe(expectedResult)
  })
  it('hasSpecialCharts funtion with spanish chart ', () => {
    const expectedResult = true;
    const actualResult= hasSpecialCharts("Quizás")
    //Assert
    expect(actualResult).toBe(expectedResult)
  })
   it('hasSpecialCharts funtion with japannese chart ', () => {
    const expectedResult = true;
    const actualResult= hasSpecialCharts("わたしは にほんごがすこししか はなせません")
    //Assert
    expect(actualResult).toBe(expectedResult)
  })

  it('hasSpecialCharts funtion with number', () => {
    const expectedResult = false;
    const actualResult= hasSpecialCharts("PO 12345")
    //Assert
    expect(actualResult).toBe(expectedResult)
  })

  it.each(dataSet)('getSanitizedAdress function using data set options', (adress, expectedAdress, isPOAdress) => {
    const expectedResult = expectedAdress;
    const actualResult= getSanitizedAdress(adress)
    //Assert
    expect(actualResult).toBe(expectedResult)
  })

    it.each(dataSet)('isPOBoxAdress function using data set options', (adress, expectedAdress, isPOAdress) => {
    const expectedResult = isPOAdress;
    const actualResult= isPOBoxAdress(expectedAdress)
    //Assert
    expect(actualResult).toBe(expectedResult)
  })


});