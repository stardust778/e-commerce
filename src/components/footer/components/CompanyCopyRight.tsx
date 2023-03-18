import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles/CompanyCopyRight.module.scss';

const CompanyCopyRight: React.FC = () => {
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <section className={ styles.company }>
      <p>
        © 2022 - { year } Company Name. All Rights Reserved.
      </p>
      <p>
        Witz!® é uma marca registrada de Witz COMÉRCIO ELETRÔNICO S/A | CNPJ: 000.000.000/00 | Todos os direitos reservados. Os preços anunciados neste site ou via e-mail promocional podem ser alterados sem prévio aviso. O Witz! não é responsável por erros descritivos. As fotos contidas nesta página são meramente ilustrativas do produto e podem variar de acordo com o fornecedor/lote do fabricante. Este site trabalha 100% em criptografia SSL. Clique aqui e veja as políticas de nossa empresa.
      </p>
    </section>
  );
};

export default CompanyCopyRight;
