import service from '../services/analyze';

export default async (req, res) => {
    try {
        const { params } = req.params;
        const result = await service(params);
        res.json(result);
    } catch (e) {
        console.log('-------------e'); console.log(e);
    }
}