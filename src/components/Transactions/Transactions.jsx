import PropTypes from 'prop-types';
import { Table, Heading, String, TabelData} from './Transactions.styled';


export const TransactionHistory = ({data: items}) => {
   return (
    <Table>
  <thead>
    <String>
      <Heading>Type</Heading>
      <Heading>Amount</Heading>
      <Heading>Currency</Heading>
    </String>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => {
       return (
        <String key={id}>
      <TabelData>{type}</TabelData>
      <TabelData>{amount}</TabelData>
      <TabelData>{currency}</TabelData>
    </String>
       )
    })}
  </tbody>
</Table>
   )
};

TransactionHistory.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.exact(
        {   id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired, 
        }
    ).isRequired
    ).isRequired
};