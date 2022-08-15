import data from "../../data/populate.json";
import { Container, TableContainer } from "./style.js";

const Table = () => {
  const createTable = data.map((area) => {
    return (
      <tr>
        <td>{area.name}</td>
        <td>{area.capacity}</td>
        <td>{area.gmd}</td>
        <td>{area.days}</td>
        <td>{area.gains}</td>
      </tr>
    );
  });

  return (
    <section id="dados">
      <Container>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th> Área</th>
                <th> Capacidade</th>
                <th> GMD </th>
                <th> Dias </th>
                <th> Ganho</th>
              </tr>
            </thead>
            <tbody>{createTable}</tbody>
          </table>
          <h3>Ganho total de peso após uma rotação completa: 26,6 kg.</h3>
        </TableContainer>
      </Container>
    </section>
  );
};

export default Table;
