using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LearningAngular6.Model
{
    [Table("Lugares")]
  public class Lugar
  {
    [Key]
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string Plan { get; set; }
    public string Descripcion { get; set; }
    public int Cercania { get; set; }
    public double Distancia { get; set; }
    public double Lat { get; set; }
    public double Lng { get; set; }
    public string Ciudad { get; set; }
    public string Calle { get; set; }
    public string Pais { get; set; }
  }
}
