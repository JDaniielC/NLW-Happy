function saveOrphanage(db, orphanageValue) {
    return db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            whatsapp,
            about,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        )   VALUES (
            "${orphanageValue.lat}",
            "${orphanageValue.lng}",
            "${orphanageValue.name}",
            "${orphanageValue.whatsapp}",
            "${orphanageValue.about}",
            "${orphanageValue.images}",
            "${orphanageValue.instructions}",
            "${orphanageValue.opening_hours}",
            "${orphanageValue.open_on_weekends}"
        );
    `)
}

module.exports = saveOrphanage;

// para deletar toda a tabela escrevemos db.run(`DELETE FROM orphanage`)
// para deletar um dado da tabela escrevemos db.run(`DELETE FROM orphanage WHERE id = '3'`)

// consultar os dados da tabela é await db.all("SELECT * FROM orphanages") e colocando WHERE id = "x" vê só um, para facilitar pode armazenar a funcão numa constante 