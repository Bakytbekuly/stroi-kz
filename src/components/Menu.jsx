import * as React from 'react';
// import { TreeView } from '@mui/lab/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeItem, TreeView } from '@mui/lab/';
import { useEffect } from "react"
import { fetchStroi } from '../fetchers/fetchStroi'
import { useDispatch, useSelector } from "react-redux"
import { setNavigationHome, setStroi } from "../store/slice/stroi";
import { Link } from 'react-router-dom';
import ItemCategory from './ItemCategory';
import { LinkBase } from './LinkBase';




export default function RichObjectTreeView() {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchStroi().then((res) => {
            dispatch(setStroi(res))
        }
        )

    }, [])

    const val = useSelector((state) => state.stroi.products);
    console.log(val);

    const renderTree = (nodes) => (
        <LinkBase to={`/${nodes.id}`} >

            <TreeItem key={nodes.id} nodeId={nodes.id} label={<ItemCategory nodes={nodes} />}  >
                {Array.isArray(nodes.childCategories)
                    ? nodes.childCategories.map((node) => renderTree(node))
                    : null}
            </TreeItem></LinkBase>
    );

    return (
        <TreeView
            aria-label="rich object"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={['root']}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 200, flexGrow: 100, maxWidth: 400, marginTop: 2, marginLeft: 10 }}
        >

            {val.map((item) => renderTree(item))}
        </TreeView>

    );
}
