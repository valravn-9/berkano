import { ScrollView } from 'react-native';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Text } from '@/components/ui/text';

const TableScreen = () => {
  return (
    <ScrollView contentContainerClassName="flex-1 p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Text>Item</Text>
            </TableHead>
            <TableHead>
              <Text>Price</Text>
            </TableHead>
            <TableHead>
              <Text>Quantity</Text>
            </TableHead>
            <TableHead>
              <Text>Total</Text>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Text>Apple</Text>
            </TableCell>
            <TableCell>
              <Text>$1.00</Text>
            </TableCell>
            <TableCell>
              <Text>2</Text>
            </TableCell>
            <TableCell>
              <Text>$2.00</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text>Banana</Text>
            </TableCell>
            <TableCell>
              <Text>$0.50</Text>
            </TableCell>
            <TableCell>
              <Text>5</Text>
            </TableCell>
            <TableCell>
              <Text>$2.50</Text>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ScrollView>
  );
};

export default TableScreen;
