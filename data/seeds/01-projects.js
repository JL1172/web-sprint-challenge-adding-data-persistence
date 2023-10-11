/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').truncate()
  await knex('projects').insert([
    {project_name: 'Seal driveway', project_description : "seal driveway job", project_completed : false},
    {project_name: 'Install window', project_description : "install window job", project_completed : false},
  ]);
};
