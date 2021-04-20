// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}
//expot data
export const data = [
    {
      id:1,
      name: "Afghanistan",
      alpha2Code: "AF",
      callingCodes: "93",
      nativeName: "افغانستان",
      numericCode: "004",
      currencies: [
            {
              code: "AFN",
              name: "Afghan afghani",
              symbol: "؋"
            }
      ]
    },
    {
      id:2,
      name: "Åland Islands",
      alpha2Code: "AX",
      callingCodes: "358",
      numericCode: "248",
      currencies: [
        {
        code: "EUR",
        name: "Euro",
        symbol: "€"
        }
      ]
    },
    {
      id:3,
      name: "Albania",
      alpha2Code: "AL",
      callingCodes: "355",

      numericCode: "008",
      currencies: [
          {
          code: "ALL",
          name: "Albanian lek",
          symbol: "L"
          }
      ]
    }
]


// ** Get initial Data
// axios.get('http://restcountries.eu/rest/v2/all').then(response => {
//   console.log(response.data)
// })

//delete
const deleteCountry = (val) => {
  console.log(val)
}
//edit
export const editEvent = (val) => {
    
}

//export columns
export const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
    minWidth: '250px',
    cell: row => (
      <div className='d-flex align-items-center'>
        <div className='user-info text-truncate ml-1'>
          <span className='d-block font-weight-bold text-truncate'>{row.name}</span>
        </div>
      </div>
    )
  },
  {
    name: 'initial',
    selector: 'alpha2Code',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Code',
    selector: 'numericCode',
    sortable: true,
    minWidth: '150px'
  },

  {
    name: 'Currency',
    selector: 'currencies',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      const currency = row.currencies.[0].symbol
      return (
          <div className='d-flex align-items-center'>
            <div className='user-info text-truncate ml-1'>
              <span className='d-block font-weight-bold text-truncate'>{currency}</span>
            </div>
          </div>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => {
                                                                              e.preventDefault()
                                                                              deleteCountry(row.id)
                                                                            } }>
                <Trash size={15} />
                <span  className='align-middle ml-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <Edit size={15} onClick={e => {
                                                                              e.preventDefault()
                                                                              editEvent(row)
                                                                            } }/>
        </div>
      )
    }
  }
]