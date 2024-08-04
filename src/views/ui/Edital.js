import { Row, Col, Table, Card, CardTitle, CardSubtitle, CardBody, CardText } from "reactstrap";
import { fetchData, fetchDataFile } from '../../services/api';
import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { useParams } from "react-router-dom";

const Edital = () => {
  const {pasta,edital} = useParams();
  const [data, setData] = useState(null);
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarEditais = async () => {
     try {
      const url = pasta+"/"+edital;
       const result = await fetchData(url);
       if (result) {
          setData(result);
          const detalhes = await carregarDetalhes(result['items']);
          setFiles(detalhes);
          console.log(detalhes);
        }

     } catch (error) {
       console.error(error);
     }
     finally {
        setLoading(false); // Define loading como false após carregar os dados
     }
   };
  
   const carregarDetalhes = async (items) => {
    const promises = items.map(async (item) => {
      try {
        const detalhes = await fetchDataFile(item['@id']);
        return { ...item, detalhes };
      } catch (error) {
        console.error(`Erro ao carregar detalhes para ${item['@id']}:`, error);
        return { ...item, detalhes: null };
      }
    });

    return Promise.all(promises);
   };

   carregarEditais();
  
  }, []);  

  if (loading) {
    return (
      
      <Row>
      <Col lg="12">Carregando...</Col></Row>
    );
  }

  return (
    <Row>
      <Col lg="12">
        <Card> 
        <CardBody className="">
            <CardTitle tag="h5">
              <i className="bi bi-card-text me-2"> </i>
              { data["title"] }
            </CardTitle>
            <CardText className="mt-3" >
            {  " Criado em: " + format(parseISO(data["created"]), 'dd/MM/yyyy HH:mm') }
            </CardText>
            <CardSubtitle >
            {  data["description"] }
            </CardSubtitle>
         
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Data criação</th>
                  <th>Modificado em</th>
                  <th>Baixar</th>
                </tr>
              </thead>
              <tbody>
              {files.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0"><a href={tdata['@id']} target="_blank" rel="noreferrer">{tdata.title}</a></h6>
                        <span className="text-muted">{tdata.description}</span>
                      </div>
                    </div>
                  </td>
                  <td><small className="text-muted">{ format(parseISO(tdata.detalhes['created']), 'dd/MM/yyyy HH:mm') }</small></td>
                  <td><small className="text-muted">{ format(parseISO(tdata.detalhes['modified']), 'dd/MM/yyyy HH:mm') }</small></td>                  
                  <td><a href={tdata['@id']} target="_blank" rel="noreferrer"><i className="bi bi-download"></i></a></td>
                </tr>
              ))}
            </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Edital;
