import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
} from "@chakra-ui/react"
import { useLocation } from "wouter";
import { useDispatch } from "react-redux";
import { EditIcon, ArrowRightIcon, DeleteIcon } from "@chakra-ui/icons";
import { useGetOwnershipsByOwnerId } from "hooks/utils/useGetOwnershipsByOwnerId";
import { useIsPublished } from "hooks/utils/useIsPublished";
import { setOwnershipId } from "store/slices/ownershipSlice";

export function PublicationsList() {

    const [_, setLocation] = useLocation();
    const { ownerships } = useGetOwnershipsByOwnerId();
    
    const dispatch = useDispatch();
    
    const handleDelete = (id) => {
        console.log(id);
    }
    
    const handleEdit = (id) => {
        console.log(id);
    }
    
    const handlePublish = (id) => {
        dispatch(setOwnershipId(id));
        setLocation(`/registrar/publicacion/${id}`);
    }

    return <>
        <TableContainer mt={8}>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Dirección</Th>
                        <Th width={"10%"}>Editar</Th>
                        <Th width={"10%"}>Eliminar</Th>
                        <Th width={"10%"}>Publicar</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        ownerships?.map(ownership =>
                            <Tr key={ownership?.id}>
                                <Td>{ownership?.id}</Td>
                                <Td>{ownership?.address?.address}</Td>
                                <Td><Button size="sm" onClick={() => handleEdit(ownership?.id)}><EditIcon /></Button></Td>
                                <Td><Button size="sm" onClick={() => handleDelete(ownership?.id)}><DeleteIcon /></Button></Td>
                                <Td><Button size="sm" onClick={() => handlePublish(ownership?.id)}><ArrowRightIcon /></Button></Td>
                            </Tr>)
                    }
                </Tbody>
            </Table>
        </TableContainer>
    </>;
}
