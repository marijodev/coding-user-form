import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import {
  waitFor,
} from '@testing-library/dom'

describe('Home', () => {
     const dataSet = [
    ["TESTING","TESTING","PO 12345", "PO 12345", true , false],
    ["TESTING","TESTING", "P.O. Box 123", "PO Box 123", true, true ],
    ["TESTING","TESTING", "123 Pool Ave", "123 Pool Ave", false , false],
    ["TESTING","TESTING", "123 Box Elder Way", "123 Box Elder Way", false, false ],
    ["TESTING","TESTING", "BOX 124 4900", "BOX 124 4900", false , false],
    ["TESTING","TESTING", "PO 123 NE 52nd St", "PO 123 NE 52nd St", false , false],
    ["TESTING","TESTING", "5489 (1) State St.", "5489 1 State St", false , true],
    ["TESTING","TESTING", "NE PO #123 53rd Box", "NE PO 123 53rd Box", false , true],
    ];

  it('should render a heading with the title', () => {
    //Arrange
    render(<Home />)
    //Act
    const heading = screen.getByRole('heading', {
      name: /User Information/,
    })
    //Assert
    expect(heading).toBeInTheDocument()
  })

  it('when user info form values are sent without lastname, then a error message must be displayed', async() => {
    render(<Home />)
    //Arrange
    const firstNameInput = screen.getByRole('textbox', {
       name: /First Name:/,
    })
    const lastNameInput = screen.getByRole('textbox', {
      name: /Last Name:/,
    })
    const adressInput = screen.getByRole('textbox', {
      name: /First-Adress:/,
    })
     const firstError =  screen.getByTestId('first-name-element');
    const secondError = screen.getByTestId('last-name-element');
    const thirdError = screen.getByTestId('adress-element');

    const buttonValidate = screen.getByRole('button', {
      name: /Validate/,
    })
  //Act
   await userEvent.type(firstNameInput, "TESTING")
   await userEvent.type(adressInput, "PO 12345")

   await userEvent.click(buttonValidate);
  //Assert
   await waitFor(() =>
    expect(firstNameInput).toHaveValue("TESTING")
  )
  await waitFor(() =>
    expect(adressInput).toHaveValue("PO 12345")
  )

   await waitFor(() =>
    expect(secondError).toHaveTextContent("lastName must be at least 3 characters")
  )
    await waitFor(() =>
    expect(firstError).toHaveTextContent("")
  )
  await waitFor(() =>
    expect(thirdError).toHaveTextContent("")
  )

  })
 it('when user info form values  are sent without firstname, then a error message must be displayed', async() => {
    render(<Home />)
//Arrange
     const lastNameInput = screen.getByRole('textbox', {
      name: /Last Name:/,
    })

     const adressInput = screen.getByRole('textbox', {
      name: /First-Adress:/,
    })

     const firstError =  screen.getByTestId('first-name-element');
    const secondError = screen.getByTestId('last-name-element');
    const thirdError = screen.getByTestId('adress-element');

    const buttonValidate = screen.getByRole('button', {
      name: /Validate/,
    })
//Act
   await userEvent.type(lastNameInput, "TESTING")
   await userEvent.type(adressInput, "PO 12345")

   await userEvent.click(buttonValidate);

//Assert
   await waitFor(() =>
    expect(lastNameInput).toHaveValue("TESTING")
  )
  await waitFor(() =>
    expect(adressInput).toHaveValue("PO 12345")
  )

   await waitFor(() =>
    expect(firstError).toHaveTextContent("firstName must be at least 3 characters")
  )
    await waitFor(() =>
    expect(secondError).toHaveTextContent("")
  )
  await waitFor(() =>
    expect(thirdError).toHaveTextContent("")
  )

  })

   it('when user info form values are sent without adress, then a error message must be displayed', async() => {
    render(<Home />)
    //Arrange
     const firstNameInput = screen.getByRole('textbox', {
       name: /First Name:/,
    })
     const lastNameInput = screen.getByRole('textbox', {
      name: /Last Name:/,
    })
    const firstError =  screen.getByTestId('first-name-element');
    const secondError = screen.getByTestId('last-name-element');
    const thirdError = screen.getByTestId('adress-element');

    const buttonValidate = screen.getByRole('button', {
      name: /Validate/,
    })
  //Act
   await userEvent.type(firstNameInput, "TESTING")
   await userEvent.type(lastNameInput, "TESTING")

   await userEvent.click(buttonValidate);
  //Assert
   await waitFor(() =>
    expect(lastNameInput).toHaveValue("TESTING")
  )
  await waitFor(() =>
    expect(firstNameInput).toHaveValue("TESTING")
  )

  await waitFor(() =>
    expect(thirdError).toHaveTextContent("adress must be at least 8 characters")
  )
  await waitFor(() =>
    expect(secondError).toHaveTextContent("")
  )
  await waitFor(() =>
    expect(firstError).toHaveTextContent("")
  )

  })

   it('when user info form values are sent without secondAdress, then none error message must be displayed', async() => {
    render(<Home />)
    //Arrange
    const firstNameInput = screen.getByRole('textbox', {
       name: /First Name:/,
    })
     const lastNameInput = screen.getByRole('textbox', {
      name: /Last Name:/,
    })

     const adressNameInput = screen.getByRole('textbox', {
      name: /First-Adress:/,
    })
       const secondAddressInput = screen.getByRole('textbox', {
      name: /Second-Adress:/,
    })
     const buttonValidate = screen.getByRole('button', {
      name: /Validate/,
    })
   //Act
      const firstError =  screen.getByTestId('first-name-element');
    const secondError = screen.getByTestId('last-name-element');
    const thirdError = screen.getByTestId('adress-element');

    await userEvent.type(firstNameInput, "TESTING")
    await userEvent.type(lastNameInput, "TESTING")
    await userEvent.type(adressNameInput, "TESTING PO")

   await userEvent.click(buttonValidate);
  //Assert
   await waitFor(() =>
    expect(secondAddressInput).toHaveValue("")
  )
  await waitFor(() =>
    expect(lastNameInput).toHaveValue("TESTING")
  )
   await waitFor(() =>
    expect(firstNameInput).toHaveValue("TESTING")
  )
   await waitFor(() =>
    expect(adressNameInput).toHaveValue("TESTING PO")
  )
  await waitFor(() =>
    expect(thirdError).toHaveTextContent("")
  )
  await waitFor(() =>
    expect(secondError).toHaveTextContent("")
  )
  await waitFor(() =>
    expect(firstError).toHaveTextContent("")
  )
  })

  it('when user info form values are sent with an adress side with more than its limit, then a error message must be displayed', async() => {
    render(<Home />)
    //Arrange
    const firstNameInput = screen.getByRole('textbox', {
       name: /First Name:/,
    })
     const lastNameInput = screen.getByRole('textbox', {
      name: /Last Name:/,
    })

     const adressNameInput = screen.getByRole('textbox', {
      name: /First-Adress:/,
    })
       const secondAddressInput = screen.getByRole('textbox', {
      name: /Second-Adress:/,
    })
     const buttonValidate = screen.getByRole('button', {
      name: /Validate/,
    })
   //Act
    const thirdError = screen.getByTestId('adress-element');

    await userEvent.type(firstNameInput, "TESTING")
    await userEvent.type(lastNameInput, "TESTING")
    await userEvent.type(adressNameInput, "TESTING TESTING TESTING TESTING TESTING")

   await userEvent.click(buttonValidate);
  //Assert
  await waitFor(() =>
    expect(thirdError).toHaveTextContent("adress must be at most 32 characters")
  )

  })
  
    it('should render calculated values elems', () => {
    render(<Home />)
   //Arrange-Act
    const hasSpecialCharsElem = screen.getByTestId('specialchars-element');
   
    const sanitizedElem = screen.getByTestId('sanitized-element');
  
    const poBoxElem = screen.getByTestId('pobox-element');
  //Assert
   expect(hasSpecialCharsElem).toBeInTheDocument()
   expect(sanitizedElem).toBeInTheDocument()
   expect(poBoxElem).toBeInTheDocument()

  })

    it.each(dataSet)('if different user info form values must display the expected values(isAdressPOBox?, hasSpecialChart?, sanitized adress value)', async(firstNameDataTest, lastNameDataTest, adressDataTest, expectedAdressTestData, isPOAdressTestData, hasChartsTestData) => {
    render(<Home />)
    //Arrange
    const firstNameInput = screen.getByRole('textbox', {
      name: /First Name:/,
    })
    const lastNameInput = screen.getByRole('textbox', {
      name: /Last Name:/,
    })

    const adressNameInput = screen.getByRole('textbox', {
      name: /First-Adress:/,
    })
      
    const buttonValidate = screen.getByRole('button', {
      name: /Validate/,
    })

    const hasSpecialCharsElem = screen.getByTestId('specialchars-element');
  
    const sanitizedElem = screen.getByTestId('sanitized-element');
  
    const poBoxElem = screen.getByTestId('pobox-element');
    //Act
    await userEvent.type(firstNameInput, firstNameDataTest)
    await userEvent.type(lastNameInput, lastNameDataTest)
    await userEvent.type(adressNameInput, adressDataTest)

  await userEvent.click(buttonValidate);
//Assert
  await waitFor(() =>
    expect(hasSpecialCharsElem).toHaveTextContent(hasChartsTestData)
  )
  await waitFor(() =>
    expect(sanitizedElem).toHaveTextContent(expectedAdressTestData)
  )
  await waitFor(() =>
    expect(poBoxElem).toHaveTextContent(isPOAdressTestData)
  )

  })

});
